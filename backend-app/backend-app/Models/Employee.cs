using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend_app.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string phoneNo { get; set; }
        public string city { get; set; }

        public int IsActive { get; set; }
    }
}