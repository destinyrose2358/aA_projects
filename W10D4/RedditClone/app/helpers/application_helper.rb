module ApplicationHelper
  def auth_token
    <<-HTML.html_safe
      <input type="hidden" name="authenticity_token" value="#{form_authenticity_token}" >
    HTML
  end

  def override(method)
    <<-HTML.html_safe
      <input type="hidden" name="_method" value="#{method}" >
    HTML
  end
end
