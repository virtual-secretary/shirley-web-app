//filename FooterView

define([
        //LIBRARIES
        "jquery",
        "mustache",
        "marionette",
        //MODELS
        
        //VIEWS
        
        //TEMPLATES
        "text!tpl/Footer.mustache"
], function(
		$, Mustache, Marionette,
		tpl	){

		var FooterView = Marionette.Region.extend({
			initalize  : function() {
				options = options || {};
				options.tpl = tpl;
				this.constructor.__super__.initialize.call(this, options);
				
			},
			render : function() {
				var d = new Date();
				var parent = {
						year : d.getFullYear()
				};
				this.el.innerHTML = Mustache.render(tpl,parent);

				return this;
			},
			onShow : function() {
				this.render();
			}
		});
		
		return FooterView;
});