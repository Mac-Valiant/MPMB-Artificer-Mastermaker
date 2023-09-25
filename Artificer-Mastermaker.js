/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	Subclass (a.k.a. Archetype)
	Effect:		This is the syntax for adding a new subclass/archetype to a class that is defined in the sheet, or to a class you made yourself
	Sheet:		v12.999 (2017-11-29)
*/

var iFileName = "Artificer - Mastermaker.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

AddSubClass( // this is the function you will be calling to add the variant

	"artificer", // Parent Class object name; Required; This has to be the exact name of the class of which you are adding a subclass. Look for the name of the class in the ClassList variable. For the default 12 classes these names are: "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", and "wizard"

	"mastermaker", // Object name; Required; The name the entry in the ClassSubList will have. This can be anything, it is just something that the sheet uses to reference the new entry and it will never be printed anywhere

	{ // don't forget this opening bracket

		regExpSearch : /^(?=.*master)(?=.*maker).*$/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "special" and "me" in it, disregarding capitalization). If this looks too complicated, just write: /specialme/i

		subname : "Mastermaker", //required; the name of the subclass

		source : ["Dread Metrol", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

		// after defining the above three, you don't need to define anything more, but you can. Defining more stuff will overwrite the entries as they are given in the ClassList. So if you do not need something to be different than the basics of the class (for example, you subclass uses the same spellcasting ability), then you don't need to define it again.
		// For the syntax of how to define more stuff, look at the ClassList (see "Homebrew Syntax - ClassList.js"). You can define all the same stuff in the same way. The below are a couple of examples:

		fullname : "Mastermaker of Artificer", //if no fullname is defined it will be automatically generated as "Class Name (Subclass name)". In this example that would be: "MyClass (Path of SpecialMe)"

		abilitySave : 6, //overwrites the abilitySave that was defined in the ClassList
		abilitySaveAlt : 2,//overwrites the abilitySaveAlt that was defined in the ClassList
		spellcastingFactor : 2, //overwrites the spellcastingFactor that was defined in the ClassList

		features : { //unlike the other entries, "features" will not delete all the features from the ClassList, but will add to the features in the ClassList. For this to work properly, the feature object has to be named "subclassfeatureX" and not something appropriate for the feature. The below are the features of the purple Dragon Knight

			"subclassfeature3" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Tools of Integration",
				source : ["DrMet", 128],
				minlevel : 3,
				description : "\n   " + "At 3rd level, you gain proficiency with heavy armor and smith’s tools. If you already have this tool proficiency, you gain proficiency with one other type of artisan’s tools of your choice.",
				toolProfs : ["Smith's tools"],
				armorProfs : [false, false, false, true],
			},
			"subclassfeature3.1" : {
				name : "Mastermaker Spells",
				source : ["DrMet", 128],
				minlevel : 3,
				toNotesPage : [{
					name : "Mastermaker Spells",
					page3notes : true,
					note : [
						"At 3rd level, you always have certain spells prepared after you reach particular levels in this class, as shown in the Mastermaker Spells table.",
						"These spells count as artificer spells for you, but they don’t count against the number of artificer spells you prepare."
					]
				}],
				spellcastingExtra : ["absorb elements", "thunderous smite", "flaming sphere", "enhance ability", "lesser restoration", "blinding smite", "haste", "freedom of movement", "stone shape", "banishing smite", "greater restoration"],
			},
			"subclassfeature3.2" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Prosthesis Expertise",
				source : ["DrMet", 128],
				minlevel : 3,
				toNotesPage : [{
					name : "Prosthesis Expertise",
					//page3notes : true,
					note : [
						"At 3rd level, whenever you finish a long rest, you can touch a nonmagical object and imbue it with your power, creating a permanent magical item that replaces a lost limb—a hand, arm, foot, leg, or similar body part.",
						"While the prosthetic is attached, it functions identically to the part it replaces.",
						"The wearer can detach or reattach it as an action, and it can’t be removed against the wearer’s will. It detaches if the wearer dies."
					]
				}],
			},
			"subclassfeature3.3" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Battlefist",
				source : ["DrMet", 128],
				minlevel : 3,
				toNotesPage : [{
					name : "Battlefist",
					page3notes : true,
					note : [
						"At 3rd level you replace one of your arms with a battlefist, a magical prosthetic you created.",
						"Your battlefist is a simple melee weapon, and you can use it as a spellcasting focus for your artificer spells.",
						"While your battlefist is a magical weapon, it can be infused as if it were a nonmagical weapon.",
						"When you attack with your battlefist, you can use your Intelligence modifier instead of Strength for the attack roll.",
						"If you hit with it, you deal bludgeoning damage equal to 1d10 + your Strength or Intelligence modifier.",
						"At 9th level, the damage dealt by your battlefist increases to 2d10 + your Strength or Intelligence modifier.",
						"Additionally, you can choose one of the following weapon properties to add to your battlefist: finesse, thrown (range 20/60), or reach.",
						"When you finish a long rest, you can replace this property with a different weapon property from the list."
					]
				}],
				weaponOptions : {
					regExpSearch : /^(?=.*battle)(?=.*fist).*$/i,
					name : "Battlefist",
					source : ["DrMet", 2],
					ability : 1,
					type : "Simple",
					damage : [1, 10, "bludgeoning"],
					range : "Melee",
					description : "Choose one: finesse, thrown (range 20/60), or reach",
					abilitytodamage : true,
					monkweapon : true
				},
				weaponsAdd : ["Battlefist"],
			},
			"subclassfeature5" : {
				name : "Extra Attack",
				source : ["DrMet", 142],
				minlevel : 5,
				description: desc([
					"I can attack twice instead of once when I take the Attack action on my turn"
				])
			},
			"subclassfeature9" : {
				name : "Improved Battlefist",
				source : ["DrMet", 128],
				minlevel : 9,
				toNotesPage : [{
					name : "Improved Battlefist",
					//page3notes : true,
					note : [
						"At 9th level, you have modified your battlefist in both mundane and magical ways.\nIt gains the following benefits:",
						"When you infuse your battlefist, you can apply two infusions to it at a time. If both infusions grant bonuses to your attack rolls or armor class, you gain only the greater bonus.",
						"Your battlefist is also a shield, increasing your armor class by 2. You can wield it as a weapon even if you are using it as a shield. You can infuse it as if it were both a simple melee weapon and a shield.",
						"The maximum number of items you can infuse at once increases by 1, but the extra infusion must be applied to your battlefist."
					]
				}],
				weaponOptions : {
					regExpSearch : /^(?=.*improved)(?=.*battlefist).*$/i,
					name : "Improved Battlefist",
					source : ["DrMet", 2],
					ability : 1,
					type : "Simple",
					damage : [2, 10, "bludgeoning"],
					range : "Melee",
					description : "Choose one: finesse, thrown (range 20/60), or reach",
					abilitytodamage : true,
					monkweapon : true
				},
				weaponsAdd : ["Improved Battlefist"],
			},
			"subclassfeature15" : {
				name : "Construct Apotheosis",
				source : ["DrMet", 128],
				minlevel : 15,
				toNotesPage : [{
					name : "Construct Apotheosis",
					//page3notes : true,
					note : [
						"At 15th level you have modified your form, becoming nearly impervious to the weaknesses of flesh. You gain the following benefits:",
						"You gain resistance to poison damage and psychic damage, and you are immune to the poisoned condition.",
						"If you are affected by a spell or magical effect, you can choose to consider yourself a construct instead of your other creature types.",
						"You can cast the Antilife Shell and Investiture of Stone spells without expending a spell slot, without preparing the spell, and without material components, provided you use your battlefist as the spellcasting focus. Once you cast either spell with this feature, you can’t cast that spell with it again until you finish a long rest."
					]
				}],
			},
		}
	}
);