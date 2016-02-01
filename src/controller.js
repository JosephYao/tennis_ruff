var tennis = require('tennis.js');

module.exports = {
	tennis: tennis,
	senderWin: function () {
		this.tennis.senderWin();
		return this.tennis.score();
	}
}