#brainstorm.md

#user flows
- homepage
- user login
- add to cabinet
	- manual add
	- url add
- view cabinet [START HERE]
- delete from cabinet
- user logout

## VIEW CABINET
three categories:
- FRESH
- IFFY (75% expired?)
- EXPIRED

order by date (new to old)
two columns: "name", "expires"

## new Class = Spice
- id: int
- name: str
- dateAdded: int
- daysGoodFor: int
- isExpired: bool
- url: str

## extras
- botanicalBasis: str
- isHerb: bool
- isGround: bool
- pricePerOunce: int
- geographicOrigin: str
- associatedCuisine: arr
- pairsWith: arr
- taste: arr
- function: arr
- volume: str
- tips: arr
- isFavorite: bool

## new Class = Mix
- ingredients: arr

## FAQ
- assuming any spice you bring into your cabinet is fresh
- what is a spice?
- spice vs dried herb?
- what is your favorite spice?
- who are you?
- how do i know if a spice has gone bad?

