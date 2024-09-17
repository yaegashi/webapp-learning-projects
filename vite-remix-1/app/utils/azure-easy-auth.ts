/**
 * Utility functions for handling Azure Easy Auth headers and environment variables.
 * These functions help in local development by allowing the use of environment variables
 * when Azure Easy Auth headers are not available.
 */

/**
 * Retrieves the value from an environment variable or request header.
 * 
 * @param request - The incoming request object.
 * @param headerKey - The key of the header to retrieve.
 * @returns The value of the environment variable or header, or null if not found.
 */
const getEnvOrHeader = (request: Request, headerKey: string): string | null => {
    const envKey = headerKey.replace(/-/g, '_');
    return process.env[envKey] || request.headers.get(headerKey);
};

/**
 * Retrieves the value of the X-MS-CLIENT-PRINCIPAL header or environment variable.
 * 
 * @param request - The incoming request object.
 * @returns The value of the X-MS-CLIENT-PRINCIPAL header or environment variable, or null if not found.
 */
export const getClientPrincipal = (request: Request): string | null => {
    return getEnvOrHeader(request, "X-MS-CLIENT-PRINCIPAL");
};

/**
 * Retrieves the value of the X-MS-CLIENT-PRINCIPAL-ID header or environment variable.
 * 
 * @param request - The incoming request object.
 * @returns The value of the X-MS-CLIENT-PRINCIPAL-ID header or environment variable, or null if not found.
 */
export const getClientPrincipalId = (request: Request): string | null => {
    return getEnvOrHeader(request, "X-MS-CLIENT-PRINCIPAL-ID");
};

/**
 * Retrieves the value of the X-MS-CLIENT-PRINCIPAL-NAME header or environment variable.
 * 
 * @param request - The incoming request object.
 * @returns The value of the X-MS-CLIENT-PRINCIPAL-NAME header or environment variable, or null if not found.
 */
export const getClientPrincipalName = (request: Request): string | null => {
    return getEnvOrHeader(request, "X-MS-CLIENT-PRINCIPAL-NAME");
};

/**
 * Retrieves the value of the X-MS-CLIENT-PRINCIPAL-IDP header or environment variable.
 * 
 * @param request - The incoming request object.
 * @returns The value of the X-MS-CLIENT-PRINCIPAL-IDP header or environment variable, or null if not found.
 */
export const getClientPrincipalIdp = (request: Request): string | null => {
    return getEnvOrHeader(request, "X-MS-CLIENT-PRINCIPAL-IDP");
};

/**
 * Retrieves the value of the X-MS-TOKEN-AAD-ID-TOKEN header or environment variable.
 * 
 * @param request - The incoming request object.
 * @returns The value of the X-MS-TOKEN-AAD-ID-TOKEN header or environment variable, or null if not found.
 */
export const getTokenAadIdToken = (request: Request): string | null => {
    return getEnvOrHeader(request, "X-MS-TOKEN-AAD-ID-TOKEN");
};

/**
 * Retrieves the value of the X-MS-TOKEN-AAD-ACCESS-TOKEN header or environment variable.
 * 
 * @param request - The incoming request object.
 * @returns The value of the X-MS-TOKEN-AAD-ACCESS-TOKEN header or environment variable, or null if not found.
 */
export const getTokenAadAccessToken = (request: Request): string | null => {
    return getEnvOrHeader(request, "X-MS-TOKEN-AAD-ACCESS-TOKEN");
};

/**
 * Retrieves the value of the X-MS-TOKEN-AAD-REFRESH-TOKEN header or environment variable.
 * 
 * @param request - The incoming request object.
 * @returns The value of the X-MS-TOKEN-AAD-REFRESH-TOKEN header or environment variable, or null if not found.
 */
export const getTokenAadRefreshToken = (request: Request): string | null => {
    return getEnvOrHeader(request, "X-MS-TOKEN-AAD-REFRESH-TOKEN");
};

/**
 * Retrieves the value of the X-MS-TOKEN-AAD-EXPIRES-ON header or environment variable.
 * 
 * @param request - The incoming request object.
 * @returns The value of the X-MS-TOKEN-AAD-EXPIRES-ON header or environment variable, or null if not found.
 */
export const getTokenAadExpiresOn = (request: Request): string | null => {
    return getEnvOrHeader(request, "X-MS-TOKEN-AAD-EXPIRES-ON");
};
