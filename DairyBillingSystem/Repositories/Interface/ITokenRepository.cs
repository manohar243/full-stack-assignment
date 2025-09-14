namespace DairyBillingSystem.Repositories.Interface
{
    public interface ITokenRepository
    {
        /// <summary>
        /// Generates a JWT token for the given username.
        /// </summary>
        /// <param name="username">The username to include in the token claims.</param>
        /// <returns>A signed JWT token string.</returns>
        string GenerateToken(string username);

        /// <summary>
        /// Validates a JWT token.
        /// </summary>
        /// <param name="token">The token string to validate.</param>
        /// <returns>True if valid, false otherwise.</returns>
        bool ValidateToken(string token);
    }
}
