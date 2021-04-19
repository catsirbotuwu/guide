module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	execute(message1) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};
