using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SourceCode.MVC.Models
{
    public class Demo:WXSSK.Common.Console.ConsoleEntity
    {
        public string Title { get; set; }

        public string Summary { get; set; }

        public int Type { get; set; }

        public DateTime CreateTime { get; set; }

        public Demo GetById(int id) {

            return new Demo();
        }

    }
}