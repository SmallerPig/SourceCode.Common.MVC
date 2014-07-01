using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SourceCode.MVC.Controllers
{
    public class UploadController : Controller
    {
        //
        // GET: /Upload/
        string origion_file;
        string datetime_str;





        public string Image()
        {
            if (System.Web.HttpContext.Current.Session["Admin"] == null)
            {
                return "nologin";
            }
            if (Request.Files.Count == 0) return null;
            HttpPostedFileBase file = Request.Files[0];
            DateTime dateTime = System.DateTime.Now;

            string directory = "Images\\" + string.Format("{0:yyyyMM}", dateTime);//this.Request.PhysicalApplicationPath + 

            WXSSK.Common.DirectoryAndFile.CreateDirectory(directory);
            string fileExtent = WXSSK.Common.DirectoryAndFile.GetFileExt(file.FileName);
            datetime_str = dateTime.ToString("yyyyMMddHHmmssfff");
            // 文件名（时间前缀+扩展名）
            string filenewname = datetime_str + "." + fileExtent;

            string fullPath = this.Request.PhysicalApplicationPath + directory + "/";
            origion_file = fullPath + filenewname;


            // 保存位置（服务器地址+文件夹地址+文件名）
            file.SaveAs(origion_file);
            string coverName = fullPath + datetime_str + "w_Cover" + "." + fileExtent;
            return "/Images/" + string.Format("{0:yyyyMM}", dateTime) + "/" + filenewname;
        }









    }
}
