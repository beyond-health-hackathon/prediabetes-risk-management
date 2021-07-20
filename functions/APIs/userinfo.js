const { db } = require('../util/admin');

exports.getUserInfo = (request, response) => {
	db
		.collection('userinfo')
		.get()
		.then((data) => {
			let userInfo = [];
			data.forEach((doc) => {
				userInfo.push({
                    userId: doc.id,
                    userHealthInfo: doc.data().userHealthInfo,
					userNutrition: doc.data().userNutrition,
				});
			});
			return response.json(userInfo);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};