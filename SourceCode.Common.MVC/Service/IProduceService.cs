using SourceCode.MVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SourceCode.MVC.Service
{
    public interface IProductService
    {
        IEnumerable<Product> GetMovies(int pageIndex, int pageSize, out int recordCount);
        IEnumerable<Product> GetMoviesByGenre(string genre, int pageIndex, int pageSize, out int recordCount);
        IEnumerable<Product> GetMoviesByActor(string actor, int pageIndex, int pageSize, out int recordCount);

        Product GetMovie(string productId);
        int GetStock(string productId);
    }
}
