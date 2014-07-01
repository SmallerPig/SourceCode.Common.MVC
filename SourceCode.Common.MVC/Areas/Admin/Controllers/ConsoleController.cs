using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SourceCode.MVC.Areas.Admin.Controllers
{
    public class ConsoleController : Controller
    {



        public ActionResult Login()
        {
            return View();
        }


        public ActionResult Main()
        {
            //if (Session["admin"] == null)
            //{
            //    Response.Redirect("/Admin/Console/Login");
            //}

            return View();
        }

        [HttpPost]
        public JsonResult Login(string username,string password)
        {


            return null;
        }



    }
}
