using System;

namespace RalDva.Entities.Concrete
{
    public abstract class ActivityEntityBase
    {
        public Guid Id { get; set; }

        public Int32 Year { get; set; }

        public String Language { get; set; }

        public String Country { get; set; }

        public String Genre { get; set; }

        public String Tags { get; set; }        

        public String UserDescription { get; set; }
    }
}
