//this is test program

(function(){
	var mainWindow = Ti.UI.createWindow({
		width:Ti.UI.FILL,
		height:Ti.UI.FILL,	
		backgroundColor:'#222222'
	});
	mainWindow.open();
	
	//login view
	var loginView = Ti.UI.createView({
		width:Ti.UI.FILL,
		height:Ti.UI.FILL,
		layout:'vertical',
		backgroundColor:'#888888'
	});
	
	var usernameLabel = Ti.UI.createLabel({
		top:'10%',
		width:Ti.UI.SIZE,
		height:Ti.UI.SIZE,
		color:"#000",
		text:'username(mail)',
		font: { fontSize: 20, fontFamily: 'AppleGothic', } ,
		textAlign: 'center',
	});
	
	var username = Ti.UI.createTextField({
		top:20,
		width:200,
		height:45,
		backgroundColor:"#111111",
		color:"#ffffff"
	});
	
	var passwordLabel = Ti.UI.createLabel({
		top:20,
		width:Ti.UI.SIZE,
		height:Ti.UI.SIZE,
		color:"#000",
		text:'password',
		font: { fontSize: 20, fontFamily: 'AppleGothic', } ,
		textAlign: 'center',
	});
	
	var password = Ti.UI.createTextField({
		top:20,
		width:200,
		height:45,
		backgroundColor:"#111111",
		color:"#ffffff"
	});
	
	var okLabel = Ti.UI.createLabel({
		top:20,
		width:100,
		height:45,
		color:"#fff",
		text:'ok',
		font: { fontSize: 20, fontFamily: 'AppleGothic', } ,
		backgroundColor:'#000',
		textAlign: 'center',
	});
	
	okLabel.addEventListener('singletap',function(){	
		if(username.getValue() != "" && password.getValue() != ""){
			require('lib/vineAPI').vineLogin(username.getvalue(),password.getValue());

			
			var animation = Ti.UI.createAnimation({
				opacity:0,
				duration:250
			});
			loginView.animate(animation);
			animation.addEventListener('complete',function(){
				animation = null;
				loginView = null;
				Ti.App.addEventListener('loginComplete',function(){
					require('lib/vineAPI').vinePopularTimeLine();
				});
				
			});			
		}
	});
	
	loginView.add(usernameLabel);
	loginView.add(username);
	loginView.add(passwordLabel);
	loginView.add(password);
	loginView.add(okLabel);
	
	mainWindow.add(loginView);
	
	
})();
