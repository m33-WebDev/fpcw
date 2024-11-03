/**
 * Information about a template instance.
 */
export interface InstanceInfo<T> {
    /**
     * The name of the instance. Used to generate the path for the resulting
     * page.
     */
    name: string;
    /**
     * Parameters to pass to the page query, such as instance id.
     */
    params: T;
}
