import { useState } from "react";

const positions = [
    "Psychiatrist",
    "Psychiatric Nurse Practitioner",
    "Licensed Marriage and Family Therapist",
    "Psychologist",
    "Licensed Clinical Social Worker",
];

export function JobApplicationForm() {
    const [position, setPosition] = useState(positions[0]);

    return (
        <form
            name="jobapplication"
            method="POST"
            // @ts-expect-error: 'netlify' attribute does not exist on HTML form tag
            netlify="true"
            action="/success"
            encType="multipart/form-data"
            className="tw-space-y-6 tw-max-w-md"
        >
            <input type="hidden" name="form-name" value="jobapplication" />

            <h1 className="tw-font-serif tw-text-3xl lg:tw-text-6xl tw-text-slate-600">
                Application
            </h1>

            <TextInput label="First name" name="firstname" />

            <TextInput label="Last name" name="lastname" />

            <TextInput label="Email address" name="email" placeholder="janesmith@example.com" />

            <TextInput label="Phone number" name="phone" placeholder="(123) 456-7890" />

            <SelectInput
                label="Position"
                name="position"
                options={positions}
                value={position}
                onChange={(value) => setPosition(value)}
            />

            <FileInput label="Resume" name="resume" />

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

function SelectInput(props: {
    label: string;
    name: string;
    options: string[];
    value: string;
    onChange?: (value: string) => void;
}) {
    return (
        <div className="tw-space-y-2">
            <label className="tw-font-sans tw-block">{props.label}</label>
            <select
                name={props.name}
                value={props.value}
                onChange={(e) => props?.onChange?.(e.target.value)}
                className="tw-rounded-xl tw-w-full tw-bg-white tw-border-2 tw-p-2 tw-font-sans tw-text-sm"
            >
                {props.options.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

function FileInput(props: { label: string; name: string }) {
    return (
        <div className="tw-space-y-2">
            <label className="tw-font-sans tw-block">{props.label}</label>
            <input
                type="file"
                name={props.name}
                className="tw-rounded-xl tw-border-2 tw-p-2 tw-bg-white tw-w-full tw-placeholder:text-slate-300 tw-font-sans tw-text-sm"
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
