json.extract! pokemon, :id, :name

begin
  json.image_url asset_path(pokemon.image_url)
rescue
  json.extract! pokemon, :image_url
end