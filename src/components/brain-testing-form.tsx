export function BrainTestingForm() {
    return (
        <form
            name="braintestingappointment"
            method="POST"
            // @ts-expect-error: 'netlify' attribute does not exist on HTML form tag
            netlify="true"
            action="/success/"
            className="tw-space-y-6 tw-max-w-md"
        >
            <input type="hidden" name="form-name" value="braintestingappointment" />

            <TextInput label="First name" name="first-name" />

            <TextInput label="Last name" name="last-name" />

            <TextInput label="Email address" name="email" placeholder="janesmith@example.com" />

            <TextInput label="Phone number" name="phone" placeholder="(123) 456-7890" />

            <RadioInput label="Existing patient" name="existing-patient" options={["Yes", "No"]} />

            <SubmitButton label="Submit" />
        </form>
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
                className="tw-rounded-xl tw-border-2 tw-p-2 tw-bg-white tw-w-full tw-placeholder:text-slate-300 tw-font-sans tw-text-sm"
            />
        </div>
    );
}

function RadioInput(props: { label: string; name: string; options: string[] }) {
    return (
        <div className="tw-space-y-2">
            <label className="tw-font-sans tw-block">{props.label}</label>
            {props.options.map((option) => (
                <div>
                    <input
                        type="radio"
                        id={option}
                        name={props.name}
                        key={option}
                        value={option}
                    ></input>
                    <label className="tw-ml-2" htmlFor={option}>
                        {option}
                    </label>
                </div>
            ))}
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
