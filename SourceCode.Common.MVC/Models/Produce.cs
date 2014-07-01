using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SourceCode.MVC.Models
{
    public partial class Product
    {
        public Product()
        {
            this.OrderLines = new HashSet<OrderLine>();
        }

        public string ProductId { get; set; }
        public string Name { get; set; }
        public string Genre { get; set; }
        public string Starring { get; set; }
        public string SupportingActors { get; set; }
        public string Director { get; set; }
        public string ScriptWriter { get; set; }
        public string ProductionCountry { get; set; }
        public string ProductionCompany { get; set; }
        public int ReleaseYear { get; set; }
        public string Language { get; set; }
        public int RunTime { get; set; }
        public decimal Price { get; set; }
        public string Story { get; set; }
        public string Poster { get; set; }
        public int Stock { get; set; }
        public string StoryAbstract { get; set; }

        public virtual ICollection<OrderLine> OrderLines { get; set; }
    }


    public partial class OrderLine
    {
        public string OrderId { get; set; }
        public string ProductId { get; set; }
        public int Quantity { get; set; }

        //public virtual Order Order { get; set; }
        //public virtual Product Product { get; set; }
    }
}