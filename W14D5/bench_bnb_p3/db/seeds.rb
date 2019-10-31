# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

benches = Bench.create([
  {description: 'first bench', lat: 37.801840, lng: -122.400425},
  {description: 'a bench', lat: 37.802574, lng: -122.405859},
  {description: 'third bench', lat: 37.800887, lng: -122.410065},
  {description: 'best bench ever', lat: 37.797420, lng: -122.399143}
])