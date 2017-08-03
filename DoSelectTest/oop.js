// module.exports = {
// 	Inher:Inher,
// 	Ebook: Ebook,
// 	PrintedBook: PrintedBook
// };
function Book(title,author,pages)
{
	this.title = title;
	this.author = author;
	this.pages = pages;
}
Book.prototype.getDetails = function()
{
	return this.title+"-"+this.author;
};

    //Write your script here. This function will be executed before the evaluation script
	
	function Inher()
	{
		//Write your inheritance logic here
		Ebook.prototype = new Book();
        Ebook.prototype.constructor = Ebook;
        
        PrintedBook.prototype = new Book();
        PrintedBook.prototype.constructor = PrintedBook;
	}

    function Ebook(format)
    {
        this.format = format;
        this.appxSize = this.setAppxSize();
    }
    Ebook.prototype.setAppxSize= () => {
        let Size;
        if(this.format === "mobi"){
            Size = this.pages*15;
        } else if (this.format === "pdf"){
            Size = this.pages*10;
        }  else if (this.format === "epub") {
            Size = this.pages*5;
        }
        return Size;
    };
    
    function PrintedBook(available, basePrice) 
    {
        this.available = available;
        this.basePrice = basePrice;
        this.sellingPrice = this.setSellingPrice();
    }
    PrintedBook.prototype.setSellingPrice = () => {
       return (this.available*0.02) + (this.basePrice*0.05) + this.basePrice; 
    };
    PrintedBook.prototype.buy = () => {
        if(this.available > 0) {
            this.available -= 1;
        }
        this.sellingPrice = setSellingPrice();
    };

    
