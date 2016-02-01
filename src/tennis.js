module.exports = {
	senderScore: 0,
	senderWin: function () {
		this.senderScore++;
	},
	score: function() {
		if (this.senderScore == 1)
			return 'Fifteen Love';

		return 'Love All';
	}
}