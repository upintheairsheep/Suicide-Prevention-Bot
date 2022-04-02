const { MessageEmbed } = require('discord.js');

module.exports = {
	command: {
		name: "privacy",
		description: "Points you to the privacy policy",
		options: []
	},

	default: async (interaction, lang) => {
		const {
			
		} = require(`../lang/${lang}.json`);

		const embed = new MessageEmbed()
			.setColor('#04d384')
			.setTitle("Privacy Policy")
			.setThumbnail('https://spbot.ml/siround.png')
			.setURL('https://spbot.ml/')
			.setDescription("See our privacy polcy at https://spbot.ml/privacy.txt");
		interaction.reply({ embeds: [embed] });
	}
}