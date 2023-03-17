import os
import boto3
import logging
import traceback
import json
import sys
import random
import string

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)


def lambda_handler(event, context):

    try:
        logger.debug(f'## EVENT\r' + json.dumps(event))

        return {'statusCode': 200,
                'headers': {
                    "Access-Control-Allow-Origin": "*",
                }, 'body': 'Successfully published data!'}

    except Exception as exp:
        exception_type, exception_value, exception_traceback = sys.exc_info()

        traceback_string = traceback.format_exception(
            exception_type, exception_value, exception_traceback)

        err_msg = json.dumps({"errorType": exception_type.__name__, "errorMessage": str(
            exception_value), "stackTrace": traceback_string, "event": event})

        logger.error(err_msg)

        raise
