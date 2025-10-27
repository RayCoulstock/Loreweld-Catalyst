import { runtime } from "~/lib/makeswift/runtime";
 
import BuildYourOwn from "~/components/build-your-own";
 
runtime.registerComponent(BuildYourOwn, {
  type: "build-your-own",
  label: "Loreweld / Build Your Own Crystal",
});