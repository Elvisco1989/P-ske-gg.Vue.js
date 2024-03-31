
Vue.createApp({
    data(){
        return{
            Ægg :{
                ProductNo: null,
                ChocolateType:null,
                Price: null,
                Amount: null,

            },
            minStockLevel:0,
            tarketProductNumber : null,
            errorMessage : "",
           
            InStock: [{"ProductNo":8011,"ChocolateType":"mørk","Price":28, "Amount":5012},{"ProductNo":8012,"ChocolateType":"mørk","Price":32, "Amount":3420},
            {"ProductNo":8013,"ChocolateType":"mørk","Price":46, "Amount":2870},
            {"ProductNo":8022,"ChocolateType":"lys","Price":31, "Amount":2870},
            {"ProductNo":8023,"ChocolateType":"lys","Price":41, "Amount":1067},
            {"ProductNo":8032,"ChocolateType":"hvid","Price":41, "Amount":2017},
        ], 
        filteredEggs:[]
        }
    },
    methods:{
        filterEggs(){
            this.filteredEggs = this.InStock.filter(Ægg=>Ægg.Amount<=this.minStockLevel);
           
        },
        updateEggs(){
            const data = this.InStock.find(e=>e.ProductNo ===this.tarketProductNumber);
            if(data){
                data.ChocolateType = this.ChocolateType;
                data.Price = this.Price;
                data.Amount = this.Amount;
               
                // Clear the input fields
                this.tarketProductNumber = null;
                this.ChocolateType = null;
                this.Price = null;
                this.Amount = null;

            }
            else{
                // console.log("Product not found");
                this.errorMessage ="Product not found";
            }

           
        },
        RemoveEgg(){
            const data = this.InStock.findIndex(e=>e.ProductNo ===this.tarketProductNumber);
            if(data!==-1){
                this.InStock.splice(data, 1)
                this.tarketProductNumber = null;
            }
            else{
                console.log("Product not found")
                this.errorMessage ="Product not found";
            }

        },
        AddEggs(){
            const newEgg = {
                ProductNo: this.ProductNo,
                ChocolateType: this.ChocolateType,
                Price: this.Price,
                Amount: this.Amount
            };
            this.InStock.push(newEgg)
            // Clear the input fields
            this.ProductNo = null;
            this.ChocolateType = null;
            this.Price = null;
            this.Amount = null;


        }

    },
    
}).mount("#app");