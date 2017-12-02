using System;
using RalDva.Entities.Interfaces;

namespace RalDva.Entities.Concrete.UsageRelated
{
    public class Plan: IEntityBase
    {
        public Guid Id { get; set; }

        public Guid UserId { get; set; }

        public Guid ActivityId { get; set; }

        public Int32? Number { get; set; }
    }
}
