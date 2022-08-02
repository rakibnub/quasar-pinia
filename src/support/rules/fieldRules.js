const rules = {
  required: (value) => !!value || "This field is required!",
  minLength: (value, length) =>
    (value && value.length >= length) ||
    `This field must have at least ${length} characters!`,
  maxLength: (value, length) =>
    (value && value.length <= length) ||
    `This field must have at most ${length} characters!`,
  email: (value) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
    "This field must be a valid email!",
  confirmPassword: (password) => (value) =>
    value === password || "Passwords don't match!",
  phone: (value) => /^\(\d{2}\)\d{4,5}\-\d{4}$/.test(value) || "Invalid phone!",
  number: (value) => /^\d+$/.test(value) || "This field must be numeric!",
};

export default rules;
