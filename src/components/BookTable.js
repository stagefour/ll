
import './BookTable.css';
import { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogCloseButton
} from "@chakra-ui/react";
import * as Yup from 'yup';

export default function BookTable () {

  const [isOpen, setIsOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const onClose = () => { setIsOpen(false); formik.resetForm(); };
  const onErrorClose = () => { setIsErrorOpen(false); };
  const cancelRef = useRef();
  const [startDate, setStartDate] = useState(new Date());

    const formik = useFormik({
        initialValues: {
          validateOnMount: true,
          firstName: '',
          email: '',
          date: '',
          hour: '17:00',
          guests: 1,
          occasion: 'none',
          comment: 'none',
        },
        onSubmit: (values) => {
          formik.values.date = startDate.toLocaleDateString();
          formik.values.hour !== '18:00' && formik.values.hour !=='21:00' ? setIsOpen(true) : setIsErrorOpen (true);
        },
        validationSchema: Yup.object({
          email: Yup.string()
            .email("Invalid e-mail address")
            .required("Required"),
          firstName: Yup.string()
            .required("Required"),
          comment: Yup.string()
            .min(4, "It's too short, if none - please enter 'none'")
            .required("Required")
        }), 
      });

    


    return ( 
      <>
      <div className='bookDiv'>

        <VStack w="100%" p={3} alignItems="flex-start">
        <Heading as="h1">
          Table Booking
        </Heading>
        <br/>
        <details>
          <summary><b>Something about the hours</b></summary>
                <p><b>Because their Api script is not working at all...</b>
                <br/>
                I've set two hours as unavailable - to get the 'non-confirmed' message.<br/>
                When I've tried to load up their script it gives me<br/>
                'cross-origin read blocking' error on the console.<br/>
                'Response is with MIME type <b>text/plain</b>'.<br/>
                If I specify script type as 'text/plain' the error disappears but<br/>
                either way I am not able to use their functions in my code.<br/>
                So... I've decided to manually set two hours to unavailable.</p>
        </details>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={(e) => { e.preventDefault();
            formik.handleSubmit(e) }}>

      <AlertDialog
          motionPreset='slideInBottom'
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}>
          <AlertDialogOverlay>
            <AlertDialogContent py={4} backgroundColor={'#81C784'}>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                {'Thank you!'}
              </AlertDialogHeader>
              <AlertDialogBody>
                {'Thanks for your booking ' + formik.values.firstName + ', you will get the confirmation on your e-mail soon!'}
                <br/>
                <br/>
                {<b>Booking detalis:</b>}
                <br/>
                {' - On ' + formik.values.date + ' at ' + formik.values.hour + ', table for ' + formik.values.guests}
                {formik.values.guests === 1 ? ' guest.' : ' guests.'}
                <br/>
                {formik.values.occasion === 'none' ? ' - Just a nice dinner without any particular occasion.'
                          : ' - It will be your ' + formik.values.occasion + ' party!!!'}
                <br/>
                {formik.values.comment === 'none' ? ' - No special requirements.' : ' - Special requirements: ' + formik.values.comment}
              </AlertDialogBody>
              <AlertDialogCloseButton />
            </AlertDialogContent>
          </AlertDialogOverlay>
      </AlertDialog>
  
      <AlertDialog
          motionPreset='slideInBottom'
          isOpen={isErrorOpen}
          leastDestructiveRef={cancelRef}
          onClose={onErrorClose}>
          <AlertDialogOverlay>
            <AlertDialogContent py={4} backgroundColor={'#FF8A65'}>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                {'Too bad...'}
              </AlertDialogHeader>
              <AlertDialogBody>
                {'Sorry ' + formik.values.firstName + ', this reservation slot is already booked!'}
                <br/>
                {'Please choose another hour.'}
              </AlertDialogBody>
              <AlertDialogCloseButton />
            </AlertDialogContent>
          </AlertDialogOverlay>
      </AlertDialog>


            <VStack spacing={4}>
              <FormControl isInvalid={formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name *</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
                <FormErrorMessage>
                    {formik.errors.firstName}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.email}>
                <FormLabel htmlFor="email">Email Address *</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <FormErrorMessage>
                    {formik.errors.email}
                </FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="guests">Number of guests: {formik.values.guests}</FormLabel>
                  <input
                        id="guests"
                        name="guests"
                        type="range"
                        min="1"
                        max="8"
                        value={formik.values.guests}
                        onChange={formik.handleChange}
                    />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="date">Reservation date:</FormLabel>
                  <DatePicker 
                        id="date"
                        name="date"
                        showPopperArrow={false}
                        selected={startDate}
                        minDate={new Date()}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                  />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="hour">Reservation time</FormLabel>
                <Select id="hour" name="hour"
                                  onChange={formik.handleChange}
                                  value={formik.values.hour}>
                  <option value="17:00" style={{color: "black"}}>17:00</option>
                  <option value="18:00" style={{color: "black"}}>18:00 this one is set to unavailable</option>
                  <option value="19:00" style={{color: "black"}}>19:00</option>
                  <option value="20:00" style={{color: "black"}}>20:00</option>
                  <option value="21:00" style={{color: "black"}}>21:00 this one is set to unavailable</option>
                  <option value="22:00" style={{color: "black"}}>22:00</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select id="occasion" name="occasion"
                                  onChange={formik.handleChange}
                                  value={formik.values.occasion}>
                  <option value="birthday" style={{color: "black"}}>birthday</option>
                  <option value="anniversary" style={{color: "black"}}>anniversary</option>
                  <option value="wedding" style={{color: "black"}}>wedding</option>
                  <option value="divorce" style={{color: "black"}}>divorce</option>
                  <option value="promotion" style={{color: "black"}}>promotion</option>
                  <option value="bachelor" style={{color: "black"}}>bachelor party</option>
                  <option value="none" style={{color: "black"}}>no special occasion</option>
                </Select>
              </FormControl>

              <FormControl isInvalid={formik.errors.comment}>
                <FormLabel htmlFor="comment">Special requirements</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={100}
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                />
                <FormErrorMessage>
                      {formik.errors.comment}
                </FormErrorMessage>
              </FormControl>
          
              <Button isDisabled={!(formik.isValid && formik.dirty)} type="submit" colorScheme="purple" width="full">
                SUBMIT
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>   
      </div>
      </>
    );
};
