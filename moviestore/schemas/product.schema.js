var mongoose = new mongoose.Schema(
{
	name:String,
	image:String,
	summary:String,
},
{
   versionkey : false;
   }
);
module.exports = mongoose.model('Product', ProductSchema,'product');