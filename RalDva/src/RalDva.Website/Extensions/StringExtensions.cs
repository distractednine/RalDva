using System;

namespace RalDva.Website.Extensions
{
    public static class StringExtensions
    {
        public static String CapitalizaFirstChar(this String str)
        {
            if (String.IsNullOrEmpty(str)) throw new ArgumentNullException(nameof(str));

            return $"{str.Substring(0, 1).ToUpper()}{(str.Length > 1 ? str.Substring(1) : String.Empty)}";
        }
    }
}
