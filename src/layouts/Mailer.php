<?php 

header("Access-Control-Allow-Origin: http://localhost:3000");
// header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true ");
header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

$name = strip_tags(trim($_POST['form_name']));
$name = str_replace(array('\r','\n'),array(' ',' '),$name);
$email = filter_var(trim($_POST['form_email']), FILTER_SANITIZE_EMAIL);
$phone = trim($_POST['form_phone']);
$location = trim($_POST['form_clientLocation']);
$targetdate = trim($_POST['form_targetdate']);
$industry = trim($_POST['form_industry']);
$budget = trim($_POST['form_budget']);
$hear = trim($_POST['form_hear']);
$message = trim($_POST['form_phone']);

// $re = 'hallo';
// return $re;



// Check that data was sent to the mailer.
if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
// Set a 400 (bad request) response code and exit.
http_response_code(400);
echo 'Oops! There was a problem with your submission. Please complete the form        and try again.';
exit;
}

// Set the recipient email address.
// FIXME: Update this to your desired email address.
$recipient = 'kresnata17@gmail.com';

// Set the email subject.
$subject = 'New contact from $name Via React Site';

// Build the email content.
$email_content = 'Name: $name\n';
$email_content .= 'Email: $email\n\n';
$email_content .= 'Email: $phone\n\n';
$email_content .= 'Email: $location\n\n';
$email_content .= 'Email: $targetdate\n\n';
$email_content .= 'Email: $industry\n\n';
$email_content .= 'Email: $budget\n\n';
$email_content .= 'Email: $hear\n\n';
$email_content .= 'Message:\n$message\n';

// Build the email headers.
$email_headers = 'From: $name <$email>';

// Send the email.
if (mail($recipient, $subject, $email_content, $email_headers)) {
// Set a 200 (okay) response code.
http_response_code(200);
echo 'Thank You! Your message has been sent.';
} else {
// Set a 500 (internal server error) response code.
http_response_code(500);
echo 'Oops! Something went wrong and we couldn’t send your message.';
}

} else {
// Not a POST request, set a 403 (forbidden) response code.
http_response_code(403);
echo 'There was a problem with your submission, please try again.';
}

?>