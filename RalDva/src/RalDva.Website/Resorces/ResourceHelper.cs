namespace RalDva.Website.Resorces
{
    public static class ResourceHelper
    {
        public static string GetString(string key)
        {
            return Strings.ResourceManager.GetString(key);
        }
    }
}
