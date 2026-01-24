export const modifiedFeats = [ 
  { 
    id: 1, 
    name: "Sharpshooter", 
    type: "Modified",
    description: `
#### You have mastered ranged weapons and can make shots that others find impossible.  

- Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls.
- Your ranged weapon attacks ignore half and three-quarters cover.
- Before you make an attack with a ranged weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If that attack hits, you add +1d12 to the attack’s damage.`
  }, 
  { 
    id: 2, 
    name: "Tavern Brawler", 
    type: "Modified",
    description: ` #### Accustomed to the rough-and-tumble fighting using whatever weapons happen to be at hand, you gain the following benefits:

- Increase your Strength or Consititution score by 1, to a maximum of 20.
- You are proficient with improvised weapons.
- When you make an unarmed attack, you add +3 to the attacks damage.`
  }, 
  { 
    id: 3, 
    name: "Heavily Armored", 
    type: "Modified",
    description: `

#### You have trained to master the use of heavy armor, gaining the following benefits:

- Increase your Strength by 1, to a maximum of 20.

- You gain proficiency with heavy armor.

- If your strength score is 17 or higher, you gain +1 AC while wearing heavy armor.`
  }, 
  { 
    id: 4, 
    name: "Spell Pressure", 
    type: "Homebrew",
    description: ` 

#### Your mastery of spellcraft allows you to punish enemies who disastrously fail to resist your magic.
**Prerequisite: Spellcasting or Pact Magic feature**
- Once per turn. When a creature rolls a natural 1 on a saving throw against one of your spells, it takes additional damage equal to 1d12 per profiency bonus. 

- A creature that is paralyzed, petrified, or otherwise automatically fails saving throws against your spell also takes this additional damage (once per turn).

- The extra damage is of the same type as the spell’s damage (or force damage if the spell has no damage type).`
  }, 
  { 
    id: 5, 
    name: "Body Thrower", 
    type: "Homebrew",
    description: `


#### You are a master of using the battlefield — and its inhabitants — as weapons. You can pick up creatures and hurl them with deadly force, turning even your enemies into improvised missiles.
**Prerequisite: Strength 17+**
-  You gain proficiency with improvised weapons. When you throw or swing a creature as an improvised weapon, it deals 1d6 + your Strength modifier damage.

-  Any creature you are grappling can be thrown or swung like a weapon. The creature must make a Dexterity saving throw (DC = 8 + your proficiency bonus + Strength modifier). On a failed save, it takes the damage listed above; on a success, it takes half damage.

- If the thrown creature hits another creature or object, that creature/object takes the same damage. The thrown creature lands prone in an unoccupied space within 5 feet.

- You can throw creatures you are grappling, whether friend or foe. Friendly creatures hit by your throw take half damage.`
  }, 
  { 
    id: 6, 
    name: "OffSpring", 
    type: "Homebrew",
    description: `

**Only one creature in a party may take this feat.**

#### Your race must be able to reproduce.

- Reduce Strength, Dexterity, or Constitution by 1, as the toll of creating an offspring has left a lasting mark on your body.

- You must follow whatever requirements are needed for your offspring to be born. 


- After the allotted time for your offspring’s growth, once they are old enough to walk and speak, they may gain 1 level in a class of their choice making them a mini adventurer, provided it is appropriate for their nature and upbringing.

- You may control them in battle, though the DM ultimately decides their actions. You can influence their development through roleplay, such as teaching them your barbarian traditions, bardic music, or other cultural practices.

- Over time, they may continue to grow, but may only reach a maximum level of 4 unless a significant amount of time passes.`
  },
  { 
    id: 7,
    name: "Harco Blood Frenzy",
    type: "Racial",
    description: `

#### An ancient right of passage among the Harco is to enter a blood frenzy, a state of heightened aggression and physical prowess. This rite is often undertaken to prove one's strength and courage, and it is said to bring out the true nature of the Harco warrior.
-  Increase your Strength by 1 to a maximum of 20.
- After making a melee weapon attack on your turn, you can use your bonus action to make a bite attack. (1d6 + your Strength modifier piercing damage)

`
    },
  { 
        id: 8,
    name: "Dedicant Druid",
    type: "Homebrew",
    description: `

#### Requires atleast 1 level in druid to take this feat. A rite of passage for Archdruids is to train as a Dedicant Druid. Allowing themselves to exhaust over and over to master the ability to shift from their sacred anima forms to their normal selves.
-  Gain an additional wildshape use.
- Choose a Monstrosity of your choice that follows the rules of your Beast Shapes tables and CR restrictions. You may change this monstrosity every time you gain a level in the druid class

`

  },  { 
        id: 9,
    name: "Fey Bargainer",
    type: "Homebrew",
    description: `

 
#### You can form magically binding contracts enforced by the Feywild. 
 **Prerequisite: Be the fey creature type.**
- You can maintain a number of active contracts equal to your Charisma modifier (minimum 1). Contracts may be made with any creature that understands you and agrees. A contract must be spoken in 30 words or fewer and a penalty that applies to both parties if broken.

When making a contract, choose one binding effect :
- **Favor**: A generic harmless favor like transportation, information, etc.
- **Gold or Possessions** (value up to 500 gp): If the contract is broken, gold or items owned by the breaker equal in value to the contract’s benefit are instantly teleported to the other party.
- **Restraining Order** (duration up to 3 days): You cannot willingly move closer to the other party.

`

  }
   ]