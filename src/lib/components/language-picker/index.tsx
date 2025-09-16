import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguagePicker = () => {
  return (
    <Select value={"pt-BR"} defaultValue={"pt-BR"}>
      <Button variant={"outline"} asChild>
        <SelectTrigger>
          <SelectValue placeholder={"Select language"} />
        </SelectTrigger>
      </Button>
      <SelectContent>
        <SelectItem aria-label="Português" value="pt-BR">
          Português (🇧🇷)
        </SelectItem>
        <SelectItem aria-label="English" value="en-US">
          English (🇺🇸)
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export { LanguagePicker };
