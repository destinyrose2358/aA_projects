json.set! "pokemon" do
  json.partial! "api/pokemon/pokemon", pokemon: @pokemon
  json.extract! @pokemon, :attack, :defense, :moves, :poke_type
  json.item_ids @pokemon.items.ids
end

json.set! :items do
  @pokemon.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness
      json.image_url asset_path(item.image_url)
    end
  end
end
