@pokemon.each do |pokemon|
  json.set! Integer(pokemon.id) do 
    json.partial! "api/pokemon/pokemon", pokemon: pokemon
  end
end
