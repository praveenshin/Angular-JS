//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AngularJSWebApi.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    
    public partial class Passenger
    {
        public int passenger_id { get; set; }
     
        public string name { get; set; }
        
        public int age { get; set; }
        
        public string gender { get; set; }
        public Nullable<int> user_id { get; set; }
    
        public virtual User_details User_details { get; set; }
    }
}
