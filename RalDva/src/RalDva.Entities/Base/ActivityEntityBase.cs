using System;

namespace RalDva.Entities.Base
{
    public abstract class ActivityEntityBase 
    {
        public String Name { get; set; }

        public Int32? Year { get; set; }

        public String Language { get; set; }

        public String Country { get; set; }

        public String Genre { get; set; }

        public String Tags { get; set; }        

        public String UserDescription { get; set; }
    }
}
