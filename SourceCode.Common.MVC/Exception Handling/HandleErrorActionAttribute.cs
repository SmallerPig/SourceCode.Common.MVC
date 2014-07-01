using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SourceCode.Mvc.Extensions
{
[AttributeUsage( AttributeTargets.Class| AttributeTargets.Method, AllowMultiple = false)]
public class HandleErrorActionAttribute: Attribute
{
    public string HandleErrorAction { get; private set; }
    public HandleErrorActionAttribute(string handleErrorAction = "")
    {
        this.HandleErrorAction = handleErrorAction;
    }
}
}