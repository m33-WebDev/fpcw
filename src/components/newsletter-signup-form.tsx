const action =
    "https://cuttingedgepsychiatry.us19.list-manage.com/subscribe/post?u=facdc7abe706e043dbfd4ead6&amp;id=2b9b2f9f34";

export function NewsletterSignupForm() {
    return (
        <>
            <form
                action={action}
                method="post"
                target="_blank"
                className="tw-lg:bg-white tw-p-[1.5rem] tw-rounded-lg tw-space-y-6 tw-shadow-2xl tw-max-w-md"
            >
                <h1 className="tw-font-serif tw-text-3xl tw-text-slate-600">Connect with us</h1>

                <p className="font-sans">
                    Want to learn more? Sign up for our newsletter and stay up to date with the
                    latest developments in mental health management.
                </p>

                <TextInput label="Email address" name="EMAIL" placeholder="janesmith@example.com" />

                <SubmitButton label="Subscribe" />

                <input
                    id="honeypot"
                    type="hidden"
                    name="b_facdc7abe706e043dbfd4ead6_2b9b2f9f34"
                    tabIndex={-1}
                    value=""
                    readOnly={true}
                    className="hidden"
                />
            </form>
        </>
    );
}

function TextInput(props: { label: string; name: string; placeholder?: string }) {
    return (
        <div className="tw-space-y-2">
            <label className="tw-font-sans tw-block">{props.label}</label>
            <input
                type="text"
                name={props.name}
                placeholder={props.placeholder}
                className="tw-rounded-xl tw-border-2 tw-p-2 tw-bg-white tw-w-full tw-placeholder:text-slate-300 tw-font-nunito tw-text-sm"
            />
        </div>
    );
}

function SubmitButton(props: { label: string }) {
    return (
        <button
            type="submit"
            className="tw-rounded-lg tw-px-4 tw-py-2 tw-text-sm tw-w-full tw-font-sans tw-font-semibold tw-bg-[#48C744] tw-text-white"
        >
            {props.label}
        </button>
    );
}
