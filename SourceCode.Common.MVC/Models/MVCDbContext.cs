using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SourceCode.MVC.Models
{
    public class WXSSKDbContext:DbContext
    {


        public DbSet<Demo> Demo { get; set; }
    }
}