using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using jQueryApi;
namespace ScriptProject2
{
    class Program
    {
        static void Main()
        {
            //note: quicklight makes phonegap apis available to c#
            jQuery.OnDocumentReady(() =>
            {
                jQuery.Select("#main h2").Click(evt => jQuery.Select("#main p").FadeToggle());
            });
        }

    }
}
