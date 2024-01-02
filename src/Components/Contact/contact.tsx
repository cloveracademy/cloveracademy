import { FC } from "react";
import SectionHeading from "../UtilityComponents/Section/sectionHeading";
import { useForm } from "@mantine/form";
import { Button, TextInput } from "@mantine/core";

const Contact: FC = (): JSX.Element => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      website: "",
      message: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      name: (value) => (value.length === 0 ? "Enter your name" : null),
    },
  });
  return (
    <div className="flex flex-col h-full w-full items-center gap-4 pt-4">
      <SectionHeading>
        <p className="text-center w-full">Contact Us</p>
      </SectionHeading>
      <div className="flex flex-row w-full justify-center gap-4 py-4">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <div className="flex flex-col h-full w-full items-start gap-2 border border-zinc-700/40 rounded-lg p-5">
            <TextInput
              withAsterisk
              label="Name"
              placeholder="eg. Jhon"
              {...form.getInputProps("name")}
            />
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <TextInput
              label="Website"
              pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#?&//=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%._\+~#?&//=]*)"
              placeholder="www.yourwebsite.com"
              {...form.getInputProps("website")}
            />
            <TextInput
              label="Message"
              placeholder="Your message"
              {...form.getInputProps("message")}
            />
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
