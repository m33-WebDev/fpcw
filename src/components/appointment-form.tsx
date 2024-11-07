import { useState } from "react";

enum ReferralSource {
    SearchEngine = "Search engine",
    SocialMedia = "Social media",
    InsuranceReferral = "Insurance referral",
    WordOfMouth = "Word of mouth",
    Other = "Other",
}

export function AppointmentForm() {
    const [referralSource, setReferralSource] = useState(ReferralSource.SearchEngine);

    return (
        <form
            name="appointmentrequest"
            method="POST"
            data-netlify="true"
            className="lg:tw-bg-white tw-p-6 tw-rounded-lg tw-space-y-6 lg:tw-shadow-2xl tw-max-w-md"
        >
            <h1 className="tw-font-serif tw-text-3xl lg:tw-text-6xl tw-text-slate-600">
                Request an appointment
            </h1>

            <TextInput label="First name" name="first-name" />

            <TextInput label="Last name" name="last-name" />

            <TextInput label="Email address" name="email" placeholder="janesmith@example.com" />

            <TextInput label="Phone number" name="phone" placeholder="(123) 456-7890" />

            <DateInput label="Desired appointment date" name="appt-requested-date" />

            <SelectInput
                label="How did you hear about us?"
                name="referral-source"
                options={Object.values(ReferralSource)}
                value={referralSource}
                onChange={(value) => setReferralSource(value as ReferralSource)}
            />

            {referralSource === ReferralSource.InsuranceReferral && (
                <TextInput label="Referring insurer" name="referral-insurer" />
            )}

            {referralSource === ReferralSource.WordOfMouth && (
                <TextInput label="Referrer name" name="referral-wordofmouth-name" />
            )}

            {referralSource === ReferralSource.WordOfMouth && (
                <TextInput label="Referrer phone number" name="referral-wordofmouth-phone" />
            )}

            {referralSource === ReferralSource.Other && (
                <TextInput label="Referral details" name="referral-other-details" />
            )}

            <SubmitButton label="Submit" />

            {/**
             * These placeholders inform Netlify about fields that are not rendered at build time.
             * This ensures that the fields are recognized and uploaded with the the form submission.
             */}
            <input type="hidden" name="form-name" value="appointmentrequest" />
            <input type="hidden" name="referral-insurer" />
            <input type="hidden" name="referral-wordofmouth-name" />
            <input type="hidden" name="referral-wordofmouth-phone" />
            <input type="hidden" name="referral-other-details" />
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

function DateInput(props: { label: string; name: string }) {
    return (
        <div className="tw-space-y-2">
            <label className="tw-font-sans tw-block">{props.label}</label>
            <input
                type="date"
                name={props.name}
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
