require 'json'

class Flash

  def initialize(req)
    @flash_hash = {}
    @flash_now_hash = JSON.parse(req.cookies['_rails_lite_app_flash']) if req.cookies['_rails_lite_app_flash']
  end
    
    def [](key, value)
         
    end

    private 

    attr_accessor :flash_now_hash, :flash_hash
end
