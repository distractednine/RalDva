using System;
using RalDva.Entities.Interfaces;

namespace RalDva.Entities.Concrete
{
    public class Book : ActivityEntityBase, 
        IEntityWithVolumes, IEntityWithPagesNumber
    {
        public String Type { get; set; }

        public Int32 VolumeNumber { get; set; }

        public String Author { get; set; }

        public Int32 PagesNumber { get; set; }
    }
}
