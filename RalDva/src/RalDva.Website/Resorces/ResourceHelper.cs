using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace RalDva.Website.Resorces
{
    public static class ResourceHelper
    {
        public static IDictionary<String, String> GetResources(Type type)
        {
            var result = type
                .GetProperties(BindingFlags.Public | BindingFlags.Static)
                .Where(x => x.PropertyType == typeof(String))
                .Select(x => new KeyValuePair<String, String>(x.Name, GetString(x.Name)))
                .ToDictionary(x => x.Key, x => x.Value);

            return result;
        }

        public static String GetString(String key)
        {
            return Strings.ResourceManager.GetString(key);
        }
    }
}