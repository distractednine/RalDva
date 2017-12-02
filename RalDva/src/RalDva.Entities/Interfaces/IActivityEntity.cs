using System.Collections.Generic;
using RalDva.Entities.Concrete.UsageRelated;

namespace RalDva.Entities.Interfaces
{
    public interface IActivityEntity
    {
        ICollection<Plan> Plans { get; set; }

        ICollection<UsageActivity> Usages { get; set; }
    }
}
