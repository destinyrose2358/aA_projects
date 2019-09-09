require 'active_support'
require 'active_support/core_ext'
require 'erb'
require_relative './session'
require 'active_support/inflector'

class ControllerBase
  attr_reader :req, :res, :params

  # Setup the controller
  def initialize(req, res)
    @req = req
    @res = res
    @params = req.params
  end

  # Helper method to alias @already_built_response
  def already_built_response?
    @already_built_response ||= false
  end

  # Set the response status code and header
  def redirect_to(url)
    unless already_built_response?
      res.status = 302
      res.location = url
      session.store_session(res)
      @already_built_response = true
    else
      raise "Double Render Error"
    end
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type) 
    unless already_built_response?
      res["Content-Type"] = content_type
      res.write(content)
      session.store_session(res)
      @already_built_response = true
    else
      raise "Double rendering error"
    end
  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name)
    path = "#{File.dirname(__FILE__)}/../views/#{self.class.name.underscore}/#{template_name}.html.erb"
    template = ERB.new(File.read(path))
    content = template.result(binding)
    render_content(content, "text/html")
  end

  # method exposing a `Session` object
  def session
    @session ||= Session.new(req)
  end

  def flash
    @flash ||= Flash.new(req)
  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
    self.send(name)
    unless already_built_response?
      render(name)
    end
  end
end

