import { FormArray, FormGroup, ValidatorFn } from "@angular/forms";

/** This can be applied to a FormArray and will tell you if you meet the minimum number of entries in the FormArray
 *
 * @argument minRequired The minimum number of entries. Defaults to 1
 */
export function atLeastOneEntryInFormArray(
  minRequired = 1
): ValidatorFn {
  return (control) => {
    if (control instanceof FormArray) {
      const c = control as FormArray;
      if (c.length < minRequired) {
        return {
          noneSelected: true
        }
      } else {
        return null;
      }
    }
    return null;

  }
}


export function triggerValidationOn(form: FormGroup) {
  Object.keys(form.controls).forEach(field => {
    const control = form.get(field);
    control?.markAsTouched({ onlySelf: true });
  });
}
