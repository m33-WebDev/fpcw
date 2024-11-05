/**
 * Information about a template instance.
 */
export interface InstanceInfo<T> {
    /**
     * The path of this page, relative to the site root.
     *
     * This should not include a preceding slash.
     */
    path: string;
    /**
     * Parameters to pass to the page query, such as instance id.
     */
    params: T;
}
