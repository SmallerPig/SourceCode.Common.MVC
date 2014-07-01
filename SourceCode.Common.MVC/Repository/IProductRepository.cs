using SourceCode.MVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SourceCode.MVC.Repository
{
    public interface IProductRepository
    {
        IEnumerable<Product> GetProducts(int pageIndex, int pageSize, out int recordCount);
        IEnumerable<Product> GetProductsByGenre(string genre, int pageIndex, int pageSize, out int recordCount);
        IEnumerable<Product> GetProductsByActor(string actor, int pageIndex, int pageSize, out int recordCount);
        Product GetProduct(string productId);
    }
}
